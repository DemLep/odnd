const fields = foundry.data.fields;

export class ClassData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            limitation: new fields.SchemaField({
                race: new fields.StringField({initial: ""}),
                weapon: new fields.StringField({initial: ""}),
                armor: new fields.StringField({initial: ""}),
                magic: new fields.StringField({initial: ""})
            }),
            max_level: new fields.NumberField({initial: 0}),
            levels: new fields.SchemaField({
                hit_dice: new fields.StringField({initial: ""}),
                title: new fields.StringField({initial: ""}),
                xp_to_next_level: new fields.NumberField({initial: 0}),
                fighting_capability: new fields.StringField({initial: ""}),
                feature: new fields.StringField({initial: ""}),
                spell_slot1: new fields.NumberField({initial: 0}),
                spell_slot2: new fields.NumberField({initial: 0}),
                spell_slot3: new fields.NumberField({initial: 0}),
                spell_slot4: new fields.NumberField({initial: 0}),
                spell_slot5: new fields.NumberField({initial: 0}),
                spell_slot6: new fields.NumberField({initial: 0})
            }),
        }
    }
}