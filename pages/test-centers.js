import Layout from '../components/Layout';
import Map from '../components/Map';

const testCenters = () => (
    <div className="container">
        <Layout>
                <h1>Get Tested</h1>
                <main>
                    <div className="map-container">

            <Map />
                    </div>
                </main>
        </Layout>
        <style jsx>{`

        h1 {
            color: #f7b403;
            width: 100%;
            text-align: center;
        }
         .map-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
             width: 100%;
        
        }
    `}</style>
    </div>
)

export default testCenters;