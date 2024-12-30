containerExists(CONTAINER_DOCKER,(err,containerID)=>{
    if(err){
        return res.status(500).send("Error checking for container");
    }
    if(containerID){
        exec(`docker stop ${CONTAINER_DOCKER} && docker rm ${CONTAINER_DOCKER}`,(err,stdout,stderr)=>{
            if(err){
                console.error("Error when remove old container");
                return res.status(500).send("Error remove old container")
            }
            if(stderr){
                console.error(`stderr ${stderr}`);
            }
                console.log("DOCKER REMOVE OLD CONTAINER CALL !!");

            //RUN CONTAINER AND IMAGE NEW PULLED !!!
            exec(`docker run -d -p 3000:3000 --name ${CONTAINER_DOCKER} ${IMAGE_DOCKER}`,(err,stdout,stderr)=>{


                if (err) {
                    console.error(`Error starting new container: ${err.message}`);
                    return res.status(500).send('Error starting the new container.');
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                }
                console.log(stdout);
                console.log("RUN DOCKER IMAGE SUCCESS !!");
                // Send a response once the container is started
                res.status(200).send('Webhook processed successfully. Container updated.');


            })



        })
    }
  

});