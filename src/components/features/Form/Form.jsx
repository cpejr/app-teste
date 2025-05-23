import React from 'react';
import { View, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { InputDefault, Container } from './Styles';
import { usePostTree } from '../../../hooks/query/tree';

export default function SubmitForm() {
  const { control, handleSubmit } = useForm();
  const { mutate: postTree, isPending: loadingPostTree } = usePostTree({
    onSuccess: () => {},
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    console.log(data);
    postTree(data);
  };

  return (
    <Container>
      <Controller
        control={control}
        name="nome"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <InputDefault
            placeholder="Nome"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <InputDefault
            placeholder="Email"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="telefone"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <InputDefault
            placeholder="Telefone"
            keyboardType="phone-pad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="idade"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <InputDefault
            placeholder="Idade"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="cidade"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <InputDefault
            placeholder="Cidade"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}
