// function onSignIn(googleUser) {
//   hideButton();
//   var id_token = googleUser.getAuthResponse().id_token;
//   if (id_token) {
//     var profile = googleUser.getBasicProfile();

//     const fullNameElement = document.createElement('h1');
//     fullNameElement.innerHTML = 'User: ' + profile.getName();
//     document.body.appendChild(fullNameElement);

//     const photoElement = document.createElement('img');
//     photoElement.src = profile.getImageUrl();
//     document.body.appendChild(photoElement);
//   }
function runApi() {
  const url_base = '';
  const spreadSheetId = '';
  const API_KEY = '';
  const sheet = 'sheet';
  const url = `${url_base}${spreadSheetId}/values/${sheet}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;
  let data = new XMLHttpRequest();
  data.onreadystatechange = function() {
    if (data.readyState === 4 && data.status === 200) {
      const jsonData = JSON.parse(data.response);
      init(jsonData.values);
    }
  };
  data.open('GET', url, true);
  data.send();
}

function init(data) {
  const [keys, ...list] = data;
  alert(list);
  const answerObjects = list.map(record => {
    const output = {};
    keys.forEach((key, key_index) => {
      if (key !== 'Zeitstempel' && key !== 'E-Mail-Adresse') {
        const question = {
          question: key,
          answer: record[key_index]
        };
        output.questions = [...(output.questions || []), question];
      } else {
        output[key] = record[key_index];
      }
    });
    return output;
  });
  console.log(answerObjects);
}

// function hideButton() {
//   const signin_btn = document.getElementById('signin_btn');
//   signin_btn.style.display = 'none';
//   // const signout_btn = document.getElementsByTagName('button');
//   // signout_btn.style.display = '';
// }

runApi();
