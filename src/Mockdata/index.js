import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

var mock = new MockAdapter(instance);

mock.onGet('/categrory').reply(200, {
  categrory: [
    {
      id: 1,
      name: 'categrory 01',
      List: [
        {
          id: 1,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 2,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 3,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 4,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 5,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 6,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 7,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
        {
          id: 8,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: false,
        },
      ],
    },
    {
      id: 2,
      name: 'categrory 02',
      List: [
        {
          id: 1,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 2,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 3,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 4,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 5,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 6,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 7,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 8,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
      ],
    },
    {
      id: 3,
      name: 'categrory 03',
      List: [
        {
          id: 1,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 2,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 3,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 4,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 5,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 6,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 7,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
        {
          id: 8,
          time: '10:15',
          content: 'Đầu mục hướng dẫn, tên video',
          icon: true,
        },
      ],
    },
  ],
});

mock.onGet('/comment').reply(200, {
  comment: [
    {
      id: 1,
      countComment: 20,

      data: [
        {
          id: 1,
          name: 'Hiền',
          time: '16 giờ',
          content: 'Hướng dẫn bổ ích',
          reply: [
            {
              id: 1,
              name: 'Admin',
              content: 'Cảm ơn bạn',
              time: '16 giờ',
            },
            {
              id: 2,
              name: 'Admin',
              content: 'Cảm ơn bạn',
              time: '16 giờ',
            },
          ],
        },
      ],
    },
  ],
});

export default instance;
