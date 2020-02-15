import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus Class Component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="hello world!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hello world!");
    });
    test("<span> element should be displayed after component creation", () => {
        const component = create(<ProfileStatus status="hello world!"/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.type).toBe("span");
    });
    test("<input> element shouldn't exist after component creation", () => {
        const component = create(<ProfileStatus status="hello world!"/>);
        const root = component.root;
        expect( () => {
            const input = root.findByType('input');
        }).toThrow();
    });
    test("<span> element should show correct status", () => {
        const component = create(<ProfileStatus status="hello world!"/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe("hello world!");
    });
    test("<input> element should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="hello world!"/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.type).toBe("input");
    });
    test("callback function should be called if deactivateEditMode method was called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello world!"
        updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});