import profileReducer, { addPost } from "./profileReducer";

let initialTestState = {
    posts: [
        {
            id: 0,
            author: 'John Doe',
            message: 'This functionality will be updated in the future',
            likes: 0
        },
        {
            id: 1,
            author: 'John Doe',
            message: 'For now this is just imitation of future behaviour',
            likes: 3
        },
    ]
};

test('New post should be added', () => {
    // 1. Initial test data
    let action = addPost('Hello World!', 'Ivan');

    // 2. Some action
    let newState = profileReducer(initialTestState, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});
test('Text of new post should be correct', () => {
    // 1. Initial test data
    let action = addPost('Hello World!', 'Ivan');

    // 2. Some action
    let newState = profileReducer(initialTestState, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe('Hello World!');
});
test('Author of new post should be correct', () => {
    // 1. Initial test data
    let action = addPost('Hello World!', 'Ivan');

    // 2. Some action
    let newState = profileReducer(initialTestState, action);

    // 3. Expectation
    expect(newState.posts[2].author).toBe('Ivan');
});
test('Id of new post should be incremented by 1', () => {
    // 1. Initial test data
    let action = addPost('Hello World!', 'Ivan');

    // 2. Some action
    let newState = profileReducer(initialTestState, action);

    // 3. Expectation
    expect(newState.posts[2].id - newState.posts[1].id).toBe(1);
});