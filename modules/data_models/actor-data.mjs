const fields = foundry.data.fields;

export class PlayerCharacterData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            class: new fields.StringField({initial: ""}),
            title: new fields.StringField({initial: ""}),
            level: new fields.NumberField({initial: 0}),
            experience: new fields.SchemaField({
                current: new fields.NumberField({initial: 0}),
                nextlevel: new fields.NumberField({initial: 0})
            })
        }
    }
}