import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from '../sections/Main';
import Find from './Find';
import Detail from './Detail';
import { useSelector } from 'react-redux';

function App() {
    let allData = useSelector((a) => a.allArt);
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/find" element={<Find allData={allData} />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Route>
                <Route path="*" element={<>404 요청한 페이지가 존재하지 않습니다</>} />
            </Routes>
        </>
    );
}

export default App;
