import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './../../../Utils';
import Button from './index';

describe('Button Component', () => {

    describe('Checking PropTypes', () => {

        it('Should Not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Button Text',
                emitText: () => {

                }
            };

            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        })

    })

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<Button {...props} />);
        });

        it('Should Render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    })

})
