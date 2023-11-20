function SyncTarget({ name, path, repoUrl }) {
    return (<div>
        Sync Target
        Name: {name}<br />
        Path: {path}<br />
        RepoUrl: {repoUrl}<br />
    </div>
    );
}

export default function SyncTargetList() {
    const sampleSyncTarget = {
        name: 'brgo-repo',
        repoUrl: 'https://github.com/jdvgh/sample-manifests.git',
        path: 'k8s/overlays/k3s'
    };
    return (
        <div>
            <SyncTarget
                name={sampleSyncTarget.name}
                path={sampleSyncTarget.path}
                repoUrl={sampleSyncTarget.repoUrl}

            />

        </div>
    );
}

