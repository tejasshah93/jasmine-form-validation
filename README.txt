- This uses Jasmine Library(https://github.com/pivotal/jasmine) to unit test the html form "form.html" found in the root directory. This tests accesses the DOM by using a jquery click against an html fixture reproduction using jasmine-jquery (https://github.com/velesin/jasmine-jquery). It does test validation against the DOM as well also, using this library.

- Running the tests

Just run index.html in your browser and watch the results of tests
form.html is the dynamic html being tested


- To watch tests failing, run indexFail.html in your browser and watch the results.

OR you can manually do the changes in the specs:

Changes:
In js/index.js, line 79
$( ".passwordTextField" ).val('validPasswd');  to  $( ".passwordTextField" ).val('inf');

and

In js/index.js, line 109
$( ".numberTextField" ).val('1'); to $( ".numberTextField" ).val('string');