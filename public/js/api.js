const endpoint = "http://localhost:9000"

const getRootFiles = async () => {
    const res = await fetch(`${endpoint}/root`);
    return res;
}

export { getRootFiles }