import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';


export default class LocationSelector extends Component {
    render() {
        const citiesArray = ['Banovići', 'Banja Luka', 'Berkovići', 'Bihać', 'Bileća', 'Bijeljina', 'Bosanska Dubica', 'Bosanska Gradiška', 'Bosansko Grahovo', 'Bosanska Krupa', 'Bosanska Kostajnica', 'Bosanski Brod', 'Bosanski Novi', 'Bosanski Petrovac', 'Bosanski Šamac', 'Bratunac', 'Brčko', 'Breza', 'Bugojno', 'Busovača', 'Bužim', 'Cazin', 'Čajniče', 'Čapljina', 'Čelić', 'Čitluk', 'Čelinac', 'Doboj', 'Dobretići', 'Domaljevac', 'Donji Vakuf', 'Drvar', 'Derventa', 'Foča', 'Fojnica', 'Gacko', 'Glamoč', 'Gračanica', 'Gradačac', 'Grude', 'Goražde', 'Gornji Vakuf', 'Jablanica', 'Jajce', 'Kakanj', 'Kalesija', 'Kalinovik', 'Kiseljak', 'Kladanj', 'Ključ', 'Konjic', 'Kotor-Varoš', 'Kreševo', 'Kupres', 'Laktaši', 'Livno', 'Lukavac', 'Lopare', 'Ljubinje', 'Ljubuški', 'Maglaj', 'Milići', 'Modriča', 'Mostar', 'Mrkonjić Grad', 'Neum', 'Nevesinje', 'Novi Travnik', 'Odžak', 'Olovo', 'Orašje', 'Pale', 'Posušje', 'Prozor-Rama', 'Pale-Prača', 'Prijedor', 'Prnjavor', 'Ravno', 'Rogatica', 'Rudo', 'Sanski Most', 'Sapna', 'Sarajevo', 'Skender Vakuf', 'Sokolac', 'Srbac', 'Srebrenica', 'Srebrenik', 'Stanari', 'Stolac', 'Šipovo', 'Široki Brijeg', 'Teočak', 'Teslić', 'Tešanj', 'Tomislavgrad', 'Travnik', 'Trebinje', 'Tuzla', 'Usora', 'Ustiprača', 'Vareš', 'Velika Kladuša', 'Visoko', 'Višegrad', 'Vitez', 'Vogošća', 'Vlasenica', 'Zavidovići', 'Zenica', 'Žepče', 'Živinice', 'Zvornik'];

        const locationDropdownOptions = citiesArray.map(city => ({
            key: city,
            value: city,
            text: city
        }));

        const distanceDropdownOptions = [
            {
                key: 0,
                value: 0,
                text: 'Exact location'
            },
            {
                key: 8,
                value: 8,
                text: '8 km'
            },
            {
                key: 16,
                value: 16,
                text: '16 km'
            },
            {
                key: 24,
                value: 24,
                text: '24 km'
            }, {
                key: 40,
                value: 40,
                text: '40 km'
            }
        ]

        return (
            <Container >
                <Dropdown
                    placeholder='Location'
                    search
                    selection
                    options={locationDropdownOptions}
                    fluid
                    style={{ marginBottom: "10px" }} />
                <Dropdown
                    placeholder='Distance'
                    search
                    selection
                    options={distanceDropdownOptions}
                    fluid
                    style={{ marginBottom: "10px" }} />
            </Container>
        )
    }
}