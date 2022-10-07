import { useEffect, useState } from 'react';

import { IconAvatar, IconShare } from 'src/Assets/Icon';

import instance from 'src/Mockdata';

const VideoFooter = () => {
  const [tag, SetTag] = useState(true);

  const [dataComment, SetDataComment] = useState();

  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    const result = await instance.get('/comment').then(function (response) {
      return response.data.comment;
    });

    SetDataComment(result);

    return result;
  };

  console.log(dataComment);

  return (
    <section>
      <div className="lg:px-24 px-12">
        <div className=" flex justify-between mb-11">
          <div>
            <button
              className={
                tag
                  ? 'p-3 TextCore tabButton font-semibold'
                  : 'font-semibold p-3'
              }
              onClick={() => SetTag(true)}
            >
              Mô tả
            </button>
            <button
              className={
                tag
                  ? 'font-semibold p-3'
                  : 'p-3 TextCore tabButton font-semibold'
              }
              onClick={() => SetTag(false)}
            >
              Bình luận
            </button>
          </div>
          <button className="ColorCore rounded-md px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold">Chia sẻ </span>
              <IconShare />
            </div>
          </button>
        </div>
        <div className="my-14">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-2xl font-bold mb-14 Blue">
                <div className={tag ? '' : 'hidden'}>Mô Tả Hướng Dẫn</div>
                <div className={tag ? 'hidden' : ''}>Bình luận người dùng</div>
              </h1>
              <div className={tag ? '' : 'hidden'}>
                <p className="my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="my-5">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <h1 className="font-bold">Lorem ipsum?</h1>
                <p className="my-5">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div className={tag ? 'hidden' : ''}>
                {dataComment?.map((comment) => (
                  <div key={comment?.id}>
                    <div className="mb-4 font-bold text-xs">
                      {comment.countComment} bình luận
                    </div>
                    {comment.data.map((data) => (
                      <div key={data.id}>
                        <div className="p-4 bg-white rounded-md mb-3">
                          <div className="flex justify-between">
                            <div className="flex">
                              <IconAvatar className="w-8 h-8" />
                              <div className="ml-3">
                                <h2 className="Water font-bold ">
                                  {data.name}
                                </h2>
                                <span className="mb-4">{data.content}</span>
                                <div className="flex gap-5 SmallText">
                                  <p>Thích</p>
                                  <p>Phản hồi</p>
                                </div>
                              </div>
                            </div>
                            <div className="SmallText">
                              <p>{data.time}</p>
                            </div>
                          </div>
                        </div>
                        {data?.reply.map((replys) => (
                          <div key={replys.id}>
                            <div className="p-4 bg-white rounded-md mb-3 ml-14">
                              <div className="flex justify-between">
                                <div className="flex">
                                  <IconAvatar className="w-8 h-8" />
                                  <div className="ml-3">
                                    <h2 className="Water font-bold ">
                                      {replys.name}
                                    </h2>
                                    <p className="SmallText border-l-2 my-2 pl-2">
                                      Đã trả lời{' '}
                                      <span className="Water font-bold">
                                        {data.name}
                                      </span>
                                    </p>
                                    <span className="mb-4">
                                      {replys.content}
                                    </span>
                                    <div className="flex gap-5 SmallText">
                                      <p>Thích</p>
                                      <p>Phản hồi</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="SmallText">
                                  <p>{replys.time} </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
                {dataComment?.data?.map((data) => (
                  <div key={data.id} className="p-4 bg-white rounded-md mb-3">
                    <div className="flex justify-between">
                      <div className="flex">
                        <IconAvatar className="w-8 h-8" />
                        <div className="ml-3">
                          <h2 className="Water font-bold ">Hiền</h2>
                          <span className="mb-4">Hướng dẫn bổ ích</span>
                          <div className="flex gap-5 SmallText">
                            <p>Thích</p>
                            <p>Phản hồi</p>
                          </div>
                        </div>
                      </div>
                      <div className="SmallText">
                        <p>16 giờ </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 col-span-2 lg:ml-32">
              <div className="flex gap-20 mb-10">
                <div>
                  <div className="Blue text-5xl font-bold">30,000</div>
                  <p className="text-center mt-2">Lượt xem</p>
                </div>
                <div>
                  <div className="Blue text-5xl font-bold">255</div>
                  <p className="text-center mt-2">Chia sẻ</p>
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold">Tags</div>

                <div className="grid grid-cols-2 SmallText gap-1 mt-6">
                  <p>tag này tag kia</p>
                  <p>tag này để vào chỉ để</p>
                </div>
                <div className="grid grid-cols-5 SmallText mt-6">
                  <p className="col-span-2">tag này tag kia</p>
                  <p>tag này</p>
                  <p>tag</p>
                  <p>tags</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFooter;
