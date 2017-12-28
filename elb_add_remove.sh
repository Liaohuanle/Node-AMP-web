#!/bin/bash

function stop_service()
{
	if [[ ! -z $elb ]]; then
			id=`curl http://169.254.169.254/latest/meta-data/instance-id`
			aws --profile $env elb deregister-instances-from-load-balancer --load-balancer-name  $elb --instances $id
	fi

	exit 0;
}

if [[ "$start_nginx" == "yes" ]]; then
		supervisorctl start nginx
fi

if [[ ! -z $elb ]]; then
  sleep 10
	id=`curl http://169.254.169.254/latest/meta-data/instance-id`
	aws --profile $env elb register-instances-with-load-balancer --load-balancer-name  $elb --instances $id
fi


if [[ `whoami` == "root" ]];then #running in container
	trap 'stop_service $service' SIGTERM

	while true; do
		sleep 1
	done
fi

