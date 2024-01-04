import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const search = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
);
export default function Detail() {
    let allData = useSelector((a) => a.allArt);
    let { id } = useParams();
    console.log(id);

    let item = allData.find((a) => a.GA_KNAME == id);

    return (
        <>
            <div className="null"></div>
            <div className="detail">
                <div className="kname">{item.GA_KNAME}</div>

                <span>{item.GA_INS_DATE}</span>

                <div className="name">{item.GA_DETAIL}</div>
                <div className="a1">
                    {item.CODE_N1_NAME} {item.CODE_N2_NAME} {item.CODE_N3_NAME}
                </div>
                <div className="addr">
                    <a href={`https://www.google.com/maps/place/${item.GA_ADDR1}`} target="_blank">
                        {item.GA_ADDR1}, {item.GA_ADDR2}
                    </a>
                </div>
                <a
                    href={`https://www.google.com/search?q=${item.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                    target="_blank"
                >
                    <i>{search}</i>
                </a>
                <div className="info">
                    <p>이미지가 정확하지 않을 수 있습니다</p>
                </div>
            </div>
        </>
    );
}

// 오면은 find.jsx 들가
