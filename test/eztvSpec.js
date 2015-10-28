var expect = require("chai").expect;
var eztv = require("../eztv.js");

describe("EZTV Api  ", function(){

  it("should deliver all series", function(done) {
    this.timeout(30000);
    eztv.series()
      .then(function(series) {
        if (series.length > 0) done();
        else done(new Error("No series"));
      })
      .catch(done);
  });

  it("should deliver torrents for The Blacklist", function(done) {
    this.timeout(30000);
    eztv.seriesTorrents({ slug: '/shows/887/the-blacklist/' })
      .then(function(torrents) {
        if (torrents.length > 0) done();
        else done(new Error("No torrents"));
      })
      .catch(done);
  });

  it("should deliver search results", function(done) {
    this.timeout(30000);
    eztv.search("blacklist")
      .then(function(torrents) {
        if (torrents.length > 0) done();
        else done(new Error("No torrents"));
      })
      .catch(done);
  });

});
