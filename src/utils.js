import axios from 'axios'
import JSSoup from 'jssoup'

const CORS_PROXY = 'https://evening-ridge-14001.herokuapp.com/'

// const ipInt = () => Math.floor(Math.random() * 255 + 1)
const getHeaders = () => ({
  'Accept-Language': 'zh-CN,zh;q=0.9',
  // "X-Forwarded-For": `${ipInt()}.${ipInt()}.${ipInt()}.${ipInt()}`
})

const strencode = (input, key) => {
  input = atob(input)
  let code = ''
  for (let i = 0; i < input.length; i++) {
    const k = i % key.length
    code += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(k))
  }
  return atob(code)
}

const getInfo = soup => {
  let t = soup
    .getText('|')
    .replace(/&nbsp;/gi, ' ')
    .split('|')
  if (t.length > 16) t = t.slice(1)

  const duration = t[0].trim()
  const title = t[1].trim()
  const addTime = t[3].trim()
  const author = t[5].trim()
  const views = t[7].trim()
  const favorites = t[9].trim()
  const comments = t[11].trim()
  const points = t[13].trim()
  const imgsrc = soup.find('img').attrs.src
  const vhref = soup.find('a').attrs.href
  const vid = getVid(imgsrc)

  return {
    title,
    addTime,
    author,
    views,
    favorites,
    comments,
    points,
    duration,
    imgsrc,
    vhref,
    vid,
  }
}

const getVid = imgsrc => {
  const last = imgsrc.split('/').pop()
  const vid = last.split('.')[0]
  return parseInt(vid)
}

export const getUrl = vid => {
  // const url = `https://ccn.91p52.com//m3u8/${vid}/${vid}.m3u8`
  const url = `https://cdn.91p07.com//m3u8/${vid}/${vid}.m3u8`
  return { url: CORS_PROXY + url, oriUrl: url }
}

const getHtml = async url => {
  url = CORS_PROXY + url
  const headers = getHeaders()
  const response = await axios.get(url, { headers })
  return response.data
}

// in video index page
export const getInfos = async url => {
  const html = await getHtml(url)
  localStorage.setItem('pageHtml', JSON.stringify(html))
  const soup = new JSSoup(html)
  const listchannel = soup.findAll('div', 'videos-text-align')
  let infos = listchannel.map(i => getInfo(i))
  infos = infos.map((info, i) => ({ id: i + 1, ...info }))
  return infos
}

// get total page of videos from like "当前最热 视频 1 - 24 的 60"
export const getTotalPage = () => {
  const html = JSON.parse(localStorage.getItem('pageHtml'))
  const soup = new JSSoup(html)
  const t = soup.find('div', 'login_register_header').text.split(' ')
  const l = t.length
  const videoNum = parseInt(t[l - 1])
  const totalPage = Math.ceil(videoNum / 24)
  return totalPage
}

const _getSrc = html => {
  const args = /strencode\("(.*?)","(.*?)",/.exec(html)
  if (args) {
    const decodedStr = strencode(args[1], args[2])
    const src = /<source src='(.*?)'/.exec(decodedStr)[1]
    return src
  } else {
    let src = /<source src="(.*?)"/.exec(html)
    src = src && src[1]
    return src || '游客'
  }
}

// in every video detail page
export const getSrc = async url => {
  const html = await getHtml(url)
  const src = _getSrc(html)
  return src
}
