function validate()
{
    validatePassword($('.passwordTextField').val());
    validateInput($('.numberTextField').val())
}

function setUpHTMLFixture() {

        jasmine.getFixtures().set(' <p> jasmine jquery form validation </p>  \
                                    <div class="password-strength"></div>    \
                                    <br/>            \
                                    <div class="validate-number"></div>      \
                                    <br/>        \
                                    <input type="text" class="passwordTextField">        \
                                    <br/>        \
                                    <input type="text" class="numberTextField">      \
                                    <br/>        \
                                    <button class="validate" onclick=validate()>Validate</button>              \
                                ');
}

function validatePassword(newPassword)
{
    var len = newPassword.length,
        passwordIndicator = $('.password-strength');

    if (len == 0){
        passwordIndicator.text('Please do not leave the password field empty!')
    }
    else if (len < 6) {
        passwordIndicator.text('Password too short. Enter atleast 6 characters');
    }
    else{
        passwordIndicator.text('');   
    }
}

function validateInput(newInput)
{
    var len = newInput.length;
    numberIndicator = $('.validate-number');

    if(len == 0) {
        numberIndicator.text('Please do not leave the input number field empty');
    }

    else if(isNaN(newInput)) {
        numberIndicator.text('Incorrect Input. Please enter a valid number');
    }
    else {
        numberIndicator.text('');   
    }
}

describe('Validating password field', function () {

    var passwordLabel;
    beforeEach(function () {
        setUpHTMLFixture();
        passwordLabel = $('.password-strength');
    });

    it('should alert when password is left blank', function () {

        $( ".passwordTextField" ).val('');
        $(".validate").click();
        expect(passwordLabel).not.toBeEmpty();
    });

    it('should alert when password is less than 6 chars', function () {
        
        $( ".passwordTextField" ).val('abcde');
        $(".validate").click();
        expect(passwordLabel).not.toBeEmpty();
    })

    it('should raise no errors if it is valid', function () {

        $( ".passwordTextField" ).val('inf');
        $(".validate").click();
        expect(passwordLabel).toBeEmpty();
    })
})

describe('Validating number field', function () {

    var numberLabel;
    beforeEach(function () {
        setUpHTMLFixture();
        numberLabel = $('.validate-number');
    });

    it('should alert when input is blank', function () {

        $( ".numberTextField" ).val('');
        $(".validate").click();
        expect(numberLabel).not.toBeEmpty();
    });

    it('should alert when input is not a number', function () {

        $( ".numberTextField" ).val('someString');
        $(".validate").click();
        expect(numberLabel).not.toBeEmpty();
    });

    it('should raise no errors if it is valid', function () {

        $( ".numberTextField" ).val('string');
        $(".validate").click();
        expect(numberLabel).toBeEmpty();
    })
})