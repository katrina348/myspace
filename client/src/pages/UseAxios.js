import useAxiosOnMount from '../hooks/useAxiosOnMount'
const OnMountTest = () => {
    const {data, loading, error} = useAxiosOnMount('https://api.github.com/users/[your-github-username]/repos?sort=created')
    const renderData = () => {
        return data.map(d => <p>{d.id}</p> )
        // return data.map(d => <HowToRenderData {...d} />)
    }
    if (loading) return <p>Loading</p>
    if (error) return <p>Error occurred</p>
    return (
        <div>
            <h1>Home</h1>
            <div>
                <header>datas</header>
                {renderData()}
            </div>
        </div>
    )
}
export default OnMountTest