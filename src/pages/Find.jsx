import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const search = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="20px" viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
);
export default function Find() {
    let sttData = useSelector((a) => a.sttArt);
    let sttData2 = [...sttData];
    sttData2.sort((a, b) => a.GA_INS_DATE - b.GA_INS_DATE);

    let ectData = useSelector((a) => a.ectArt);
    let ectData2 = [...ectData];
    ectData2.sort((a, b) => a.GA_INS_DATE - b.GA_INS_DATE);

    let allData = useSelector((a) => a.allArt);
    let allData2 = [...allData];
    allData2.sort((a, b) => a.GA_INS_DATE - b.GA_INS_DATE);

    let [ordered, setOrdered] = useState('오름차순');
    let order = (e) => {
        setOrdered(e.target.value);
    };
    const page = ['동상', '기타조형물', '공공미술'];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + page[index] + '</span>';
        },
    };

    return (
        <div>
            <div className="null"></div>
            <div className="options">
                <select name="order" id="order" onChange={order}>
                    <option defaultValue="오름차순">오름차순</option>
                    <option value="내림차순">내림차순</option>
                </select>
            </div>
            <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="title"></div>
                    {ordered === '오름차순'
                        ? sttData.map((data) => (
                              <div key={data.GA_KNAME} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR1}`} target="_blank">
                                          {data.GA_ADDR1}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))
                        : sttData2.map((data) => (
                              <div key={data.GA_KNAME} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR1}`} target="_blank">
                                          {data.GA_ADDR1}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title"></div>
                    {ordered === '오름차순'
                        ? ectData.map((data) => (
                              <div key={`${data.GA_KNAME}${data.GA_ADDR1}`} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR1}`} target="_blank">
                                          {data.GA_ADDR1}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))
                        : ectData2.map((data) => (
                              <div key={data.GA_KNAME} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR1}`} target="_blank">
                                          {data.GA_ADDR1}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title"></div>
                    {ordered === '오름차순'
                        ? allData.map((data, i) => (
                              <div key={i} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR}`} target="_blank">
                                          {data.GA_ADDR}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))
                        : allData2.map((data, i) => (
                              <div key={i} className="data">
                                  <Link to={`/detail/${data.GA_KNAME}`} className="info">
                                      <div>{data.GA_KNAME}</div>
                                  </Link>

                                  <Link to={`/detail/${data.GA_KNAME}`} className="date">
                                      <span>{data.GA_INS_DATE}</span>
                                  </Link>
                                  <div className="addr">
                                      <a href={`https://www.google.com/maps/place/${data.GA_ADDR}`} target="_blank">
                                          {data.GA_ADDR}
                                      </a>
                                  </div>
                                  <a
                                      href={`https://www.google.com/search?q=${data.GA_KNAME}&sca_esv=595072651&tbm=isch&sxsrf=AM9HkKnWEFRl-LnUK10Nn0CqOOiZY7GsXQ:1704197422964&source=lnms&sa=X&ved=2ahUKEwjm-5aQ1r6DAxWTklYBHaPwDs0Q_AUoAXoECAEQAw&biw=1505&bih=756&dpr=1`}
                                      target="_blank"
                                  >
                                      <i>{search}</i>
                                  </a>
                              </div>
                          ))}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

//select 에서 지정된 값 가져오기 + api 값 자르기 알아와 그리고 시간남으면 비주얼좀 손봐 몬생김
