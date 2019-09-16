$(document).ready(function() {

  const BASE_URL = 'https://api.github.com/users';
  const USERNAME = 'apierc2175';

  const CLIENT_ID = '4ff8e6e9879da858c26c';
  const CLIENT_SECRET = '41159b96ee4cbb493bbcc7f64d53e445bb994450';

  let success = (res) => {
    // console.log(res);
    let source = $('#profile-section').html();
    let template = Handlebars.compile(source);
    let context = res.data;
    let html = template(context);
    $('.profile-section').prepend(html);


  }

  let request = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });

  request.done(success);

  let createRepoHTML = (res) => {
    // console.log(res);
    let source = $('#repos').html();
    let template = Handlebars.compile(source);
    // res.data is an array
    let context = {repos: res.data};
    let html = template(context);
    $('.repos').append(html);


  }

  let getRepoData = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}/repos`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });

  getRepoData.done(createRepoHTML);





  let createOrgHTML = (res) => {
    let source = $('#org').html();
    let template = Handlebars.compile(source);
    let context = {org: res.data};
    console.log(context);
    let html = template(context);
    $('.org').append(html);


  }

  let getOrgData = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}/orgs`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });

  getOrgData.done(createOrgHTML);











});

// $(document).ready(function() {
//
//   const BASE_URL = 'https://api.github.com/users/apierc2175/repos';
//   const USERNAME = 'apierc2175';
//
//   const CLIENT_ID = '4ff8e6e9879da858c26c';
//   const CLIENT_SECRET = '41159b96ee4cbb493bbcc7f64d53e445bb994450';
//
//     let success = (res) => {
//     // console.log(res);
//     let source = $('#the-repos').html();
//     let template = Handlebars.compile(source);
//     let context = res.data;
//     let html = template(context);
//     $('.the-repos').prepend(html);
//
//
//   }
//
//   let request = $.ajax({
//     method: 'GET',
//     url: `${BASE_URL}`,
//     dataType: "jsonp",
//     data: {
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//     }
//   });
//
//  request.done(success);
// });



// let source = $('#entry-template').html()
// //console.log(source);
// let template = Handlebars.compile(source);
// //console.log(template);
// let context = {title: "My New Post", body: "This is my first post..."};
// let html = template(context);
// //above line should build out html
// //this logs the html I just created
//
// $('.blog-post').html(html);
//this above line goes into the div blog-post and then replaces the html with our variable html
