package mg.tonymushah.port_manager.models.bateaux;

import java.util.UUID;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class BateauxEndpoint {
    private BateauxRepository repository;

    public BateauxEndpoint(BateauxRepository repository) {
        this.repository = repository;
    }

    public @Nonnull Page<@Nonnull Bateaux> findAll(Pageable page){
        return this.repository.findAll(page);
    }

    public Bateaux save(Bateaux bateaux){
        return this.repository.save(bateaux);
    }

    public @Nonnull Bateaux getBateauxById(UUID id){
        return this.repository.getReferenceById(id);
    }

    public <S extends Bateaux> @Nonnull Page<@Nonnull S> findAll(Example<S> example,  Pageable page){
        return this.repository.findAll(example, page);
    }

    public <S extends Bateaux> void delete(S bateaux){
        this.repository.delete(bateaux);
    }
}
