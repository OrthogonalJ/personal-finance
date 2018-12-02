const gulp = require('gulp');
const exec = require('child_process').exec;
const del = require('del');
const ts = require("gulp-typescript");

//// CONSTANTS ////

const BUILD_DIR = './build';
const COMPILED_DIR = './dist';
const SERVER_BUILD_DIR = BUILD_DIR;
const CLIENT_BUILD_DIR = BUILD_DIR + '/client';
const CLIENT_COMPILED_DIR = COMPILED_DIR + '/quiz-game';
const SERVER_SRC_DIR = './server-src';


const tsProject = ts.createProject("tsconfig.json");

//// HELPER FUNCTIONS ////

function buildClient(cb, isProd) {
    buildCmd = (isProd) ? 'ng build --prod': 'ng build';

    exec(buildCmd, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        
        if (err !== null) {
            cb(err);
            return;
        }

        gulp.src(CLIENT_COMPILED_DIR + '/**')
            .pipe(gulp.dest(CLIENT_BUILD_DIR + '/'))
            .on('end', function() { cb(); })
            .on('error', function(err) { cb(err); });

    });
}


//// TASKS ////

gulp.task('build-client', (cb) => buildClient(cb, false));
gulp.task('build-client-prod', (cb) => buildClient(cb, true));

// gulp.task('build-client', function(cb) {
//     exec('ng build', function(err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
        
//         if (err !== null) {
//             cb(err);
//             return;
//         }

//         gulp.src(CLIENT_COMPILED_DIR + '/**')
//             .pipe(gulp.dest(CLIENT_BUILD_DIR + '/'))
//             .on('end', function() { cb(); })
//             .on('error', function(err) { cb(err); });

//     });
// });

gulp.task('build-server', function() {
    // trans-piles server typescript files to js and writes them to the build dir
    return gulp.src(SERVER_SRC_DIR + '/**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest(SERVER_BUILD_DIR + '/'));
});

gulp.task('clean', function() {
    return del([BUILD_DIR + '/*', COMPILED_DIR + '/*']);
})

gulp.task('build-all', gulp.series('clean', 'build-client', 'build-server'));

gulp.task('build-release', gulp.series('clean', 'build-client-prod', 'build-server'));