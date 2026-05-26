pipeline{
    agent any

    trigger{
        pollSCM "H/2 * * * *"
    }

    tools{
        nodejs "NODE22"
    }

    environment{
        DOCKER_IMAGE = "dhruvamaheshwari47/etp_jenkins_try"
        DOCKER_TAG = "latest"
        CONTAINER_NAME = "jenkins_try"
        PORT = 4000
    }

    stages{
        stage("Clone from the github")
        {
            steps{
                git url: "https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6_try.git",
                branch: 'main'
            }
        }

        stage("install all dependency")
        {
            steps{
                bat "npm install"
            }
        }

        stage("push the image on docker hub")
        {
            steps{
                withCredentials([
                    usernamePassword(
                        credentialId: "dockerhub"
                        usernameVariable : "DOCKER_USERNAME"
                        passwordVariable : "DOCKER_PASSWORD"
                    )
                ])
            }
        }

        stage("stop the previous container")
        {
            steps{
                bat "docker rm -f ${CONTAINER_NAME} || true"
            }
        }
        stage("re-Run the docker container")
        {
            steps{
                bat "docker run -d -p ${port}:4000 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }

    post{
        success{
            echo "pipeline is successfully running"
        }
    }
}
