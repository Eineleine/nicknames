import { Validator } from '../index';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    describe('validateUsername', () => {
        test('valid username', () => {
            expect(validator.validateUsername('a-user')).toBe(true);
            expect(validator.validateUsername('username')).toBe(true);
            expect(validator.validateUsername('a1-user-b')).toBe(true);
        });

        test('invalid username (does not start with a letter)', () => {
            expect(validator.validateUsername('-user')).toBe(false);
            expect(validator.validateUsername('1user')).toBe(false);
            expect(validator.validateUsername('_username')).toBe(false);
        });

        test('invalid username (does not end with a letter)', () => {
            expect(validator.validateUsername('user-')).toBe(false);
            expect(validator.validateUsername('user1-')).toBe(false);
            expect(validator.validateUsername('user_')).toBe(false);
        });

        test('invalid username (contains numbers in between)', () => {
            expect(validator.validateUsername('username123')).toBe(false);
            expect(validator.validateUsername('user-123')).toBe(false);
            expect(validator.validateUsername('user1')).toBe(false);
            expect(validator.validateUsername('u-5678-a')).toBe(false);
        });

        test('invalid username (only digits)', () => {
            expect(validator.validateUsername('1234')).toBe(false);
        });

        test('valid username (with underscores)', () => {
            expect(validator.validateUsername('a_user')).toBe(true);
            expect(validator.validateUsername('a_u_s_e_r')).toBe(true);
        });
    });
});