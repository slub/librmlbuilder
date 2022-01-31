class LibRML extends Object {
    id = '';
    tenant = '';
    usageguide = '';
    copyright = false;
    mention = false;
    sharealike = false;
    onlynoncommercialuse = false;
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