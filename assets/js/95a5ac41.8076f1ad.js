"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[3810],{41622:i=>{i.exports=JSON.parse('{"pluginId":"references_john_srv__jod_dist_template","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"toolsSidebar":[{"type":"link","label":"< Tools","href":"/docs/references/tools/"},{"type":"link","label":"JOD Distributions TEMPLATE","href":"/references/tools/jod_dist_template/","docId":"index"},{"type":"link","label":"Distribution Life-cycle","href":"/references/tools/jod_dist_template/distribution_life_cycle","docId":"distribution_life_cycle"},{"type":"category","label":"Create your own JOD Distribution","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requirements","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/requirements","docId":"create_your_own_jod_distribution/requirements"},{"type":"link","label":"Start new JOD Distribution","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/start_new_jod_distribution","docId":"create_your_own_jod_distribution/start_new_jod_distribution"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Customize JOD Distribution","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/customize_jod_distribution","docId":"create_your_own_jod_distribution/configuration/customize_jod_distribution"},{"type":"link","label":"Distribution configs","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/distribution_configs","docId":"create_your_own_jod_distribution/configuration/distribution_configs"},{"type":"link","label":"Object Configs","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/object_configs","docId":"create_your_own_jod_distribution/configuration/object_configs"},{"type":"link","label":"Object Structure","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/object_structure","docId":"create_your_own_jod_distribution/configuration/object_structure"},{"type":"link","label":"Object PRE-POST scripts","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/pre_post_scripts","docId":"create_your_own_jod_distribution/configuration/pre_post_scripts"},{"type":"link","label":"Objects Resources","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/object_resources","docId":"create_your_own_jod_distribution/configuration/object_resources"}]},{"type":"link","label":"Test JOD Distribution","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/test_jod_distribution","docId":"create_your_own_jod_distribution/test_jod_distribution"},{"type":"link","label":"Publish JOD Distribution","href":"/references/tools/jod_dist_template/create_your_own_jod_distribution/publish_jod_distribution","docId":"create_your_own_jod_distribution/publish_jod_distribution"}]},{"type":"category","label":"How to use a JOD Distribution","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requirements","href":"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/requirements","docId":"how_to_use_a_jod_distribution/requirements"},{"type":"link","label":"Get a JOD Distribution","href":"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/get_a_jod_distribution","docId":"how_to_use_a_jod_distribution/get_a_jod_distribution"},{"type":"link","label":"Configure a JOD Distribution","href":"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/configure_a_jod_distribution","docId":"how_to_use_a_jod_distribution/configure_a_jod_distribution"},{"type":"link","label":"Run a JOD Distribution","href":"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/run_a_jod_distribution","docId":"how_to_use_a_jod_distribution/run_a_jod_distribution"},{"type":"link","label":"Install a JOD Distribution as a Service","href":"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service","docId":"how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service"}]},{"type":"link","label":"Build JOD Distribution TEMPLATE","href":"/references/tools/jod_dist_template/build_jod_distribution_template","docId":"build_jod_distribution_template"},{"type":"link","label":"References","href":"/references/tools/jod_dist_template/references","docId":"references"}]},"docs":{"build_jod_distribution_template":{"id":"build_jod_distribution_template","title":"Build JOD Distribution TEMPLATE","description":"This project includes a Gradle config that provide the `buildTMPL` task. Execute that task to assemble and generate the JOD Distribution TEMPLATE:","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/customize_jod_distribution":{"id":"create_your_own_jod_distribution/configuration/customize_jod_distribution","title":"Customize JOD Distribution","description":"A JOD Distribution can represent any kind of object in a JOSP EcoSystem, depending on his configs.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/distribution_configs":{"id":"create_your_own_jod_distribution/configuration/distribution_configs","title":"Distribution configs","description":"Before building your own distribution, you must edit the `configs/joddistconfigs.sh|ps1` file and populate his properties.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/object_configs":{"id":"create_your_own_jod_distribution/configuration/object_configs","title":"Object Configs","description":"Once you configured your distribution properly, you can proceed to configure the JOSP Object exposed by your distribution.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/object_resources":{"id":"create_your_own_jod_distribution/configuration/object_resources","title":"Objects Resources","description":"All files contained in the `dists/resources` directory will be copied to the destination distribution.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/object_structure":{"id":"create_your_own_jod_distribution/configuration/object_structure","title":"Object Structure","description":"The most important configuration in a JOD Distribution is the `struct.jod` file. This file contains the structure of JOSP Object exposed by any installation of our distribution. Then that structure will be used by JOSP Service developers to understand and interact with the JOSP Object.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/configuration/pre_post_scripts":{"id":"create_your_own_jod_distribution/configuration/pre_post_scripts","title":"Object PRE-POST scripts","description":"End Users use JOD Distribution Commands to manage their JOD Distribution installation. They can start/stop, install/uninstall (as a service) and get his state.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/publish_jod_distribution":{"id":"create_your_own_jod_distribution/publish_jod_distribution","title":"Publish JOD Distribution","description":"To publish your own JOD Distribution is enough to set execution mode to `prod` and execute the `scripts/publish.sh|ps1` script from JOD Template Commands.","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/requirements":{"id":"create_your_own_jod_distribution/requirements","title":"Requirements","description":"To create and customize a new JOD Distribution, depending on your working OS, please install following requirements:","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/start_new_jod_distribution":{"id":"create_your_own_jod_distribution/start_new_jod_distribution","title":"Start new JOD Distribution","description":"Initialize a JOD Distribution project","sidebar":"toolsSidebar"},"create_your_own_jod_distribution/test_jod_distribution":{"id":"create_your_own_jod_distribution/test_jod_distribution","title":"Test JOD Distribution","description":"Once you are ready to startup and test your JOD Distribution; depending on wht you need to test, different execution modes are available.","sidebar":"toolsSidebar"},"distribution_life_cycle":{"id":"distribution_life_cycle","title":"Distribution Life-cycle","description":"From the JOD Distributions TEMPLATE source code (this project) to an operative JOSP Objects there are few steps performed by 3 different actors:","sidebar":"toolsSidebar"},"how_to_use_a_jod_distribution/configure_a_jod_distribution":{"id":"how_to_use_a_jod_distribution/configure_a_jod_distribution","title":"Configure a JOD Distribution","description":"Each distribution based on the JOD Distribution TEMPLATE provides a script to configure his behaviour.","sidebar":"toolsSidebar"},"how_to_use_a_jod_distribution/get_a_jod_distribution":{"id":"how_to_use_a_jod_distribution/get_a_jod_distribution","title":"Get a JOD Distribution","description":"JOD Distributions are released as compressed zip or tgz files. You can find it from distribution\'s website, or from the official JOD Distributions list. On the same websites you can also get the full distribution\'s url, simply right-click on download link and select \'Copy link address\'; this will be useful to install distributions on remote devices via commandline.","sidebar":"toolsSidebar"},"how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service":{"id":"how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service","title":"Install a JOD Distribution as a Service","description":"When you run a JOD Distribution with the `start.sh|ps1` JOD Dist Cmd, it can still run until the operating system reboots; but after that the distribution must be re-started manually.","sidebar":"toolsSidebar"},"how_to_use_a_jod_distribution/requirements":{"id":"how_to_use_a_jod_distribution/requirements","title":"Requirements","description":"Any JOD Distribution base on JOD Dist TMPL require only the Java Virtual Machine installed on target device. That means the device where you would install a JOD Distribution require at least the java command. More requirements can be checked on JOD Distribution\'s specific documentation.","sidebar":"toolsSidebar"},"how_to_use_a_jod_distribution/run_a_jod_distribution":{"id":"how_to_use_a_jod_distribution/run_a_jod_distribution","title":"Run a JOD Distribution","description":"Once you get and configured a JOD Distribution, you can start it and use the JOSP Object exposed by that distribution.","sidebar":"toolsSidebar"},"index":{"id":"index","title":"JOD Distributions TEMPLATE","description":"<ReferenceIntro","sidebar":"toolsSidebar"},"references":{"id":"references","title":"References","description":"JOD Template Scripts","sidebar":"toolsSidebar"}}}')}}]);