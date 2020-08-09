import axios from "axios";

const ipInt = () => Math.floor(Math.random() * 255 + 1);

const headers = {
  "Accept-Language": "zh-CN,zh;q=0.9",
  "X-Forwarded-For": `${ipInt()}.${ipInt()}.${ipInt()}.${ipInt()}`
};

function strencode(input, key) {
  input = atob(input);
  let code = "";
  for (let i = 0; i < input.length; i++) {
    const k = i % key.length;
    code += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(k));
  }
  return atob(code);
}

export const getSrc = async url => {
  url = url.replace("http://91porn.com", "");
  const response = await axios.get(url, { headers });
  const html = response.data;
  const args = /strencode\("(.*?)","(.*?)",/.exec(html);
  const decodedStr = strencode(args[1], args[2]);
  const src = /src='(.*?)'/.exec(decodedStr)[1];
  return src;
};
