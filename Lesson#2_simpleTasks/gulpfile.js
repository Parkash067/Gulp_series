var gulp=require('gulp');

gulp.task('task1',function(){
	console.log("task#1")
});

gulp.task('task2',function(){
	console.log("task#2")
})

gulp.task('task3',function(){
	console.log("task#3")
})


gulp.task('task4',function(){
	console.log("task#4")
})

gulp.task('task5',['task1','task2','task3','task4'],function(){
	console.log("task#5")
})

//if you lookat task5 it has 5 dependencies  it means that after all task.... task fifth will executed(but it doesn't necessary)