import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import Post from '../public/client/Components/Post';
import Newsfeed from '../public/client/Components/NewsFeed';
import FavoritedPost from '../public/client/Components/FavoritedPost';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Post', () => {
    let wrapper;
    const props = {
      title: 'title',
      summary: 'summary',
      link: 'link',
      currentFavorites: {
        title: 'link',
      },
      addFavorite: jest.fn(),
      deleteFavorite: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<Post {...props} />);
    });

    it('Renders an <a> element with the title as text', () => {
      expect(wrapper.find('a').text().includes(props.title)).toBe(true);
    });

    it('Renders an <a> element with the link as the href', () => {
      expect(wrapper.find('a').at(0).props().href).toEqual(props.link);
    });

    it('Renders a <p> element with the summary prop as the text', () => {
      expect(wrapper.find('p').text().includes(props.summary)).toBe(true);
    });

    it('Favorites a post', () => {
      const propsFav = {
        title: 'Different title',
        summary: 'summary',
        link: 'link',
        currentFavorites: {
          title: 'link',
        },
        addFavorite: jest.fn(),
        deleteFavorite: jest.fn(),
      };
      const wrapperFav = shallow(<Post {...propsFav} />);
      wrapperFav.find('span').simulate('click');
      expect(propsFav.addFavorite).toHaveBeenCalled();
    });

    it('Removes previously favorited post', () => {
      wrapper.find('span').simulate('click');
      expect(props.deleteFavorite).toHaveBeenCalled();
    });
  });

  describe('FavoritedPost', () => {
    let wrapper;
    const props = {
      title: 'Crazy Title Name',
      link: 'Link',
      deleteFavorite: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<FavoritedPost {...props} />);
    });

    it('Renders an <a> element with the title as text', () => {
      expect(wrapper.find('a').text().includes(props.title)).toBe(true);
    });

    it('Removes previously favorited post', () => {
      wrapper.find('span').simulate('click');
      expect(props.deleteFavorite).toHaveBeenCalled();
    });
    
    it('Renders an <a> element with the link as the href', () => {
      expect(wrapper.find('a').at(0).props().href).toEqual(props.link);
    });
  });

  describe('NewsFeed', () => {
    let wrapper;
    const props = {
      posts: [{ title: 'title', link: 'link', summary: 'summary' }],
      currentFavorites: {
        title: 'link',
      },
      addFavorite: jest.fn(),
      deleteFavorite: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<Newsfeed {...props} />);
    });

    it('Renders a <section> element containing a Post component', () => {
      expect(wrapper.find('section').text().includes('<Post />')).toBe(true);
    });

    it('Renders a <section> element containing text if there are no posts', () => {
      const propsNoPosts = {
        posts: [],
        currentFavorites: {
          title: 'link',
        },
        addFavorite: jest.fn(),
        deleteFavorite: jest.fn(),
      };
      wrapper = shallow(<Newsfeed {...propsNoPosts} />)
      expect(wrapper.find('section').text().includes('Click on a country')).toBe(true);
    });
  });

  
});
