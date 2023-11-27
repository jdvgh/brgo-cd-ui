function SyncTarget({ name, path, repoUrl }: { name: string, path: string, repoUrl: string }) {
    return (<div>
        Sync Target
        Name: {name}<br />
        Path: {path}<br />
        RepoUrl: {repoUrl}<br />
    </div>
    );
}

export default async function SyncTargetList() {
    const clusterTargets = await retrieveTargetsFromCluster();
    const targetList = clusterTargets.map(syncTarget =>
            <SyncTarget
                key={syncTarget.metadata.name}
                name={syncTarget.metadata.name}
                path={syncTarget.spec.path}
                repoUrl={syncTarget.spec.repoUrl}
            />
    );
    return (
        <div>
            {targetList}
        </div>

    );
}

async function retrieveTargetsFromCluster() {
    const response = await fetch('http://localhost:8001/apis/brgo.jdvgh.com/v1alpha1/namespaces/default/synctargets', { cache: "no-store" });
    const syncTargetsWrapper = await response.json();

    let iSyncTargets: ISyncTarget[] = [];
    const syncTargets = syncTargetsWrapper.items;
    syncTargets.forEach((syncTarget: ISyncTarget) => {
        let iSyncTarget: ISyncTarget = {
            metadata: { name: syncTarget.metadata.name },
            spec: {
                path: syncTarget.spec.path,
                repoUrl: syncTarget.spec.repoUrl,
            }
        };
        iSyncTargets.push(iSyncTarget);
    }
    );
    return iSyncTargets;
}

interface ISyncTarget {
    metadata: { name: string },
    spec: {
        repoUrl: string,
        path: string,
    }
}
