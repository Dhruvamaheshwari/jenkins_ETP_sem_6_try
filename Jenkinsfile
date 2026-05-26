pipeline{
    agent any

    triggers{
        pollSCM "H/2 * * * *"
    }

    tools{
        nodejs "NODE22"
    }

    environment{
        DOCKER_IMAGE = 'dhruvamaheshwari47/try_etp_sem_6'
        DOCKER_TAG = "latest"
        CONTAINER_NAME = 'etp_sem_6'
    }

    stages{
        stage("Clone")
        {
            steps{
                git url : "https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6_try.git",
                branch: "main"
            }
        }

        stage("install all the dependency")
        {
            steps{
                bat "npm install"
            }
        }

        stage("build the docker image")
        {
            steps{
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage("push the docker image on the docker hub")
        {
            steps{
                withCredentials([
                    usernamePassword(
                        credentialsId:'dockerhub',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: "DOCKER_PASSWORD"
                    )
                ]){
                    bat """ 
                        echo %DOCKER_PASSWORD%| docker login -u %DOCKER_USERNAME% --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }

        stage("stop the old container")
        {
            steps{
                bat "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage("re_run the docker container")
        {
            steps{
                bat "docker run -d -p ${port}:5000 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }

    post{
        success{
            echo "pipeline successfully build"
        }
    }
}