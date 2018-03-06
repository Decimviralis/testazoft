#!/bin/bash

if [ -z $1 ]
    then
	echo "Please enter directory name"
    else
	d="./$1"
	mkdir -p $d
	cd $d
	touch $d.vue
	echo "<template src="./template.pug" lang="pug"></template>
<script src="./script.js"></script>
<style src="./style.scss" scoped lang="scss"></style>" > $1.vue
	touch template.pug
	echo  ".$1" > template.pug
	touch style.scss
	echo  ".$1{
	
}" > style.scss
	touch script.js
	echo "export default {
	name: '$1',
};" > script.js
fi