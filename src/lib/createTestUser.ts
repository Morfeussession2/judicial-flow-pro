import { supabase } from "@/integrations/supabase/client";

export const createTestUser = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('create-user', {
      body: {
        email: 'teste@gmail.com',
        password: 'Teste123'
      }
    });

    if (error) {
      console.error('Erro ao criar usuário:', error);
      return { success: false, error };
    }

    console.log('Usuário criado com sucesso:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return { success: false, error };
  }
};
