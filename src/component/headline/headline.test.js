import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from './../../../Utils'


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
        const expectedProps = {
            header: 'Test Header',
            desc: 'Test Desc',
            tempArr: [{
                fName: 'Test fName',
                lName: 'Test lName',
                email: 'test@gmail.com',
                age: 23,
                onlineStatus: true
            }]
        }

        const propsErr = checkProps(Headline, expectedProps)
        expect(propsErr).toBeUndefined();
    })
})

describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a header', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        })

        it('Should render a description', () => {
            const component = findByTestAttr(wrapper, 'descWrapper');
            expect(component.length).toBe(1);
        })

    });

    describe('Have No props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0)
        })
    });

})