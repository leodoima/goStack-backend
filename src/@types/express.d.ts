/**
 * Alterando a definição de tipos.
 * Neste caso alteraremos especificamente o comportamento padrão do Express
 */

declare namespace Express {
  /**
   * Request é o recurso que desejamos modificar
   */
  export interface Request {
    /**
     * Incrementa opções abaixo ao Request padrão da aplicação, ou seja, não irá sobrescrever as funções
     */
    user: {
      id: string;
    };
  }
}
