var dbPass = "password1"
var clusterName = "cluster"

try {
  print('Setting up InnoDB cluster ' + clusterName + '\n');
  shell.connect('root@db-1:3306', dbPass)
  // var cluster = dba.createCluster(clusterName); //single-primary
  var cluster = dba.createCluster(clusterName, {multiMaster: true, force: true}); //multiMaster to be deprecated, multiPrimary to replace
  print('\nAdding instances to the cluster.');
  cluster.addInstance({user: "root", host: "db-2", password: dbPass})
  print('\n.');
  cluster.addInstance({user: "root", host: "db-3", password: dbPass})
  print('\n.');
  print('\nInstances successfully added to the cluster.');
  print('\nInnoDB cluster deployed successfully.\n');
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}