var db = require('./grunt/db/db');

module.exports = function(grunt) {
	grunt.registerTask('builddb', 'populate the database', function() {
	//BUILD DB
	done = this.async();
	var user = new db.user({ username: 'ktoler', email: 'ktoler@ktoler.com', password: 'slapdabass'});
	console.log(user);
    user.save(function(err){
    	if(err){
    		console.log(err);
    	} else {
    		console.log("User: " + user.username + " Saved.");
    	}
    	db.db.close(done);

    });
	});
};