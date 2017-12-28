#!/bin/bash

service= node-h5

function build_image_for_nodejs()
{
	repo=docker.musical.ly:5000/$service
  commit_id=`git rev-parse --short HEAD`
	tag=${commit_id}
	sudo docker build -t $repo:$tag .
	if [[ $? -ne 0 ]]; then
		echo "docker build $repo:$tag failed"
		exit 1
	else
		echo "docker tag and push for $repo:$tag"
		sudo docker push $repo:$tag
 		images="$images\n$repo:$tag"
	fi

}

function main()
{
	images=""

	build_image_for_nodejs $service

	if [[ -d src/share/build ]]; then
		aws s3 cp --recursive src/share/build/ s3://mus-static/node-h5/ 
	fi

	if [[ $? == 0 ]]; then
		printf "\nimages ready to pull:$images\n"
    printf "\nusage:\n please specify env, elb using docker environment variables. \n"
	fi
}

main "$@"
