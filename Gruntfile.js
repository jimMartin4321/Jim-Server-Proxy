module.exports = function (grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'us-west-1',
        bucket: 'hrsf104-front-end-capstone-jim-martin',
      },
      files: {
        expand: true,
        cwd: '../stock-value-chart/client/public',
        src: 'bundle.js',
        dest: '/bundle.js',
      }
    }
  });
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('default', ['aws_s3']);
};
