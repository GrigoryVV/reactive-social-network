export const required = value => (
    value || typeof value === 'number' ? undefined : 'This field is required'
);

export const minLength = (min) => value => (
    value && value.length < min ? `It must be longer than ${min} characters` : undefined
);

export const maxLength = (max) => value => (
    value && value.length > max ? `It must be less than ${max} characters` : undefined
);

export const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address' : undefined
)