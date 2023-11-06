package br.com.providerit.LearningCrud;

import br.com.providerit.LearningCrud.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository <Pessoa, Long> {
}
