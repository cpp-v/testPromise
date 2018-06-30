var g=require('gulp');
var brSync=require('browser-sync');


g.task('browser-sink',function () {
	brSync(
     {
       server:{
         baseDir:'dest'       
       
       },
       notify:false
     }	
	);


});


g.task('w',['browser-sink'],function () {
  g.watch('dest/**/*.*',brSync.reload);
});

g.task('brRestart',function () {
  brSync.reload({stream:true});


});