/**
 * Created by bluehawky on 14-9-29.
 */
var mogile = require('mogile');
// The createClient method takes an array of trackers
var trackers = ['localhost:7001'];


// Create a new mogile client
var client = mogile.createClient(trackers);

// All of the commands that work within a domain use a Domain object
var articleDomain = client.domain('articles');

var domains = {};

/**
 * article 列表
 * @type {string[]}
 */
var domainNameList = ['articles'];

for (var index in domainNameList){
    var domainName=domainNameList[index];
    domains[domainName] = client.domain(domainName);
}

exports.domains = domains;

