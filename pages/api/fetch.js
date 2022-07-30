// Next.js API route support: https://nextjs.org/docs/api-routes/introductio

const getTranslation = async(data)  => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("content", data);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");
  encodedParams.append("fixation", "1");
  encodedParams.append("saccade", "10");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7374b6d74dmsh8b65d5ddbbd326cp1ef2a6jsnb7bfe74eb217',
		'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
	},
	body: encodedParams
};

const res = await fetch('https://bionic-reading1.p.rapidapi.com/convert', options)
	.then(response => response.text())
	.catch(err => console.error(err));
console.log(res)
return res

}

export default getTranslation;
