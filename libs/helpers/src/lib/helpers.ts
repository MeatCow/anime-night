import { AxiosRequestConfig } from 'axios';

export const createListRequest = (
  genre: string,
  username: string
): AxiosRequestConfig => {
  const inputData = {
    base: 'external',
    'included[]': genre,
    'external[site]': 'AniList',
    'external[list]': '',
    'external[onlyMyAnime]': false,
    'external[username]': username,
  };
  const formData = getFormData(inputData);

  return {
    url: 'https://www.randomanime.org/api/list/custom',
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language':
        'en-US,en;q=0.9,fr;q=0.8,zh-TW;q=0.7,zh-CN;q=0.6,zh;q=0.5',
      authorization:
        'e95975fe462564212f9e3a269790564599f31bf4d85e7c1e8075cb46c14321f0',
      'content-length': '680',
      'content-type':
        'multipart/form-data; boundary=----WebKitFormBoundaryvrqXqHeZ28F2IcUB',
      cookie:
        'cf_clearance=bxZY.mDmjHSYcSbNERdb4WT8QGNLCHMN3dymzrEA.h0-1681871655-0-160',
      dnt: '1',
      origin: 'https://www.randomanime.org',
      referer: ' https://www.randomanime.org/',
      'sec-ch-ua':
        '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.3',
    },
    data: formData,
  };
};

export const getFormData = (input: Record<any, any>) =>
  Object.keys(input).reduce((formData, key) => {
    formData.append(key, input[key]);
    return formData;
  }, new FormData());
