class LibRML extends Object {
    id = '';
    tenant = '';
    usageguide = '';
    mention = false;
    sharealike = false;
    copyright = false;
    actions = [];
}

class Action extends Object {
    type = '';
    permission = false;
    restrictions = [];

    constructor(type = '') {
        super();
        this.type = type;
    }
}

class Restriction extends Object {
    type = '';

    constructor(type) {
        super();
        this.type = type;
    }
}

export {LibRML, Action, Restriction}