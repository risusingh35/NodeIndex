// cluster.js
import cluster from "cluster";
import os from "os";
import StartApp from "./src/app.js";

export const Cluster = () => {
    const noOfClusters = os.cpus().length;
    console.log({ noOfClusters });
    // cluster.isPrimary
    if (false) {
        console.log(`Cluster process running on PID ${process.pid}`);

        for (let i = 0; i < noOfClusters; i++) {
            console.log(`Forking worker ${i + 1}`);
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker process ${worker.process.pid} died. Restarting...`);
            cluster.fork();
        });
    } else {
        const port = process.env.PORT || 3000;
        const app = StartApp();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}