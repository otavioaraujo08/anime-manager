import { useEffect, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { animeService } from '../../../../services/anime';
import { AnimeData } from '../../../../interfaces/animes';
import {
    Button,
    Container,
    ContainerField,
    FieldLabel,
    SelectField,
    TextField,
} from './styles';
import { daysOfWeek } from '../../../../utils/daysOfWeek';
import { progress } from '../../../../utils/progress';

interface EditAnimeModalProps {
    id: number;
    isOpen: boolean;
    closeModal: () => void;
}

export const EditAnimeModal = ({
    id,
    isOpen,
    closeModal,
}: EditAnimeModalProps) => {
    const [animeData, setAnimeData] = useState<AnimeData>();

    useEffect(() => {
        const handleGetAnimeData = async (id: number) => {
            try {
                const response = await animeService.getAnimesInfo({
                    id: id,
                });

                setAnimeData(response[0]);
            } catch (error: any) {
                alert(error.message);
            }
        };

        if (id != 0) {
            handleGetAnimeData(id);
        }
    }, [id]);

    return (
        <Modal
            title="Editar informações"
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <Container>
                <ContainerField>
                    <FieldLabel>Nome</FieldLabel>

                    <TextField placeholder="Digite o nome aqui..." />
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Foto</FieldLabel>

                    <TextField placeholder="Insira a URL aqui..." type="url" />
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Data de exibição</FieldLabel>

                    <SelectField>
                        {daysOfWeek.map((day) => (
                            <option key={day.value} value={day.value}>
                                {day.name}
                            </option>
                        ))}
                    </SelectField>
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Data da última exibição</FieldLabel>

                    <TextField type="date" />
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Episódios assistidos</FieldLabel>

                    <TextField
                        placeholder="Digite a quantidade aqui"
                        type="number"
                    />
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Progresso</FieldLabel>

                    <SelectField>
                        {progress.map((progress) => (
                            <option key={progress.value} value={progress.value}>
                                {progress.name}
                            </option>
                        ))}
                    </SelectField>
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Progresso</FieldLabel>

                    <SelectField>
                        {progress.map((progress) => (
                            <option key={progress.value} value={progress.value}>
                                {progress.name}
                            </option>
                        ))}
                    </SelectField>
                </ContainerField>

                <ContainerField>
                    <FieldLabel>Salvar alterações</FieldLabel>

                    <Button>Salvar</Button>
                </ContainerField>
            </Container>
        </Modal>
    );
};
