Hi guys....
till now we covered
what is task runner?
what is gulp?
how to setup gulp on windows?

Today we will learn how to creat task on gulp.....

first of all make a directory where you want to save your gulp file like..... 
I created a folder.... 

Then install gulp locally inside this directory so that we can use or require object of gulp.....
to install gulp locally use this command
npm install gulp

once you installed gulp make a file ... save it as "gulpfile.js"

before... to code ... I want to define you basic syntax

Syntax:

var variable_name=require('gulp');
vairable_name.task('name_of_task',function(){

//here we can write our logic.....

})
....

Lets.... make our first task.... which print hello-world in cmd......

as I already mention above first we have to install gulp locally...

Now gulp successfully installed.... Lets start to do code in our file...

To run gulp file.... open cmd in current directory

type:
 gulp task_name  like

 gulp print 

lets run this file
you can see that... gulp task completed... and print hello world..

In next video I'll tell you more about gulp...
you can download or clone this code from my git repo....
https://github.com/Parkash067/Gulp_series

Thanks for watching this video if you like this... please like and subscribe........ it
bye bye .... take care dear:)......


